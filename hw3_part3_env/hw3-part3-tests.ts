import * as assert from "assert";
import {evalParse4} from './L4-eval-box';

assert.deepEqual(evalParse4(`
(L4 (define loop (lambda (x) (loop x)))
    ((lambda ((f lazy)) 1) (loop 0)))`),
    1);

assert.deepEqual(evalParse4(`
((lambda ((x lazy)) 1) (/ 1 0))`),
    1);

assert.deepEqual(evalParse4(`
((lambda ((x lazy) (b lazy) c) c) (/ 1 0) (/ 1 0) 1)`),
    1);

assert.deepEqual(evalParse4(`
((lambda ((x lazy) y) (if (= y 0) y x)) (/ 1 0) 0)`),
    0);

assert.deepEqual(evalParse4(`
((lambda ((x lazy)) ((lambda ((x lazy)) 0) (/ 1 0))) (/ 1 0))`),
0);

assert.deepEqual(evalParse4(`
(((lambda () (lambda ((x lazy)) 1))) (/ 1 0))`),
1);

assert.deepEqual(evalParse4(`(
(lambda ((x lazy)) 1) (/ 1 0))`),
1);

assert.deepEqual(evalParse4(`
(L4 (define factorial (lambda (fact)
(if (= 0 fact) 1 (* fact (factorial (- fact 1)))))) (factorial 5))`),
120);

assert.deepEqual(evalParse4(`
((lambda ((x lazy)) x) 5)`),
5);

assert.deepEqual(evalParse4(`
((lambda ((x lazy)) ((lambda ((y lazy)) 5) x)) (/ 1 0))`),
5);

assert.deepEqual(evalParse4(`
((lambda ((f lazy)) (f 1 1)) +)`),
2);

assert.deepEqual(evalParse4(`
    (L4 (if ((lambda ((x lazy)) (= x 10)) 10) #t #f))`),
        true);

