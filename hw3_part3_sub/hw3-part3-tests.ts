import * as assert from "assert";
import { evalParse} from './L3-eval';

assert.deepEqual(evalParse(`
(L3 (define loop (lambda (x) (loop x)))
    ((lambda ((f lazy)) 1) (loop 0)))`),
    1);

assert.deepEqual(evalParse(`
(L3 (define loop (lambda ((a lazy)) 1) (/ 1 0)))`),
    1);

assert.deepEqual(evalParse(`
(L3 ((lambda (y) (y (/ 1 0))) (lambda ((x lazy)) 1)))`),
    1);

assert.deepEqual(evalParse(`
(L3 ((lambda ((x lazy) y) (y x)) (/ 1 0) (lambda ((x lazy)) 1))))`),
    1);

assert.deepEqual(evalParse(`
(L3 ((lambda (x) (x (/ 1 0))) (lambda ((x lazy)) ((lambda ((x lazy)) 1) (/ 1 0))))))`),
    1);

    