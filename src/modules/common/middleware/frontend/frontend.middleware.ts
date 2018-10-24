import { MiddlewareFunction, Injectable, NestMiddleware } from '@nestjs/common';

import * as path from 'path';
import { ROUTE_PREFIX } from '../../../../routes';

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];

const resolvePath = (file: string) => path.resolve(`./dist/videolist/${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (req, res, next) => {
            const { url } = req;
            if (url.indexOf(ROUTE_PREFIX) === 1) {
                // it starts with /api --> continue with execution
                next();
            } else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0) {
                // it has a file extension --> resolve the file
                // let r = url.split("/");
                // // res.sendFile(url);
                // res.sendFile(resolvePath(r[(r.length - 1)]));
                res.sendFile(resolvePath(url));
            } else {
                // in all other cases, redirect to the index.html!
                res.sendFile(resolvePath('index.html'));
            }
        };
    }
}