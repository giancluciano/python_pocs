
## GraalPy full benchmark

| Benchmark               | python  | graalpy                  |
|-------------------------|:-------:|:------------------------:|
| 2to3                    | 312 ms  | 22.8 sec: 73.02x slower  |
| chameleon               | 8.80 ms | 5.49 ms: 1.60x faster    |
| chaos                   | 96.0 ms | 2.36 ms: 40.72x faster   |
| crypto_pyaes            | 97.1 ms | 3.63 ms: 26.73x faster   |
| deltablue               | 4.86 ms | 588 us: 8.27x faster     |
| django_template         | 49.2 ms | 4.89 ms: 10.06x faster   |
| dulwich_log             | 85.3 ms | 456 ms: 5.34x slower     |
| fannkuch                | 462 ms  | 39.9 ms: 11.58x faster   |
| float                   | 92.1 ms | 7.63 ms: 12.06x faster   |
| genshi_text             | 28.4 ms | 24.9 ms: 1.14x faster    |
| genshi_xml              | 68.4 ms | 376 ms: 5.50x slower     |
| go                      | 158 ms  | 16.7 ms: 9.42x faster    |
| hexiom                  | 7.68 ms | 512 us: 15.00x faster    |
| html5lib                | 80.7 ms | 22.6 ms: 3.57x faster    |
| json_dumps              | 16.9 ms | 14.7 ms: 1.15x faster    |
| json_loads              | 34.2 us | 62.6 us: 1.83x slower    |
| logging_format          | 9.77 us | 3.44 us: 2.84x faster    |
| logging_silent          | 146 ns  | 0.07 ns: 1990.09x faster |
| logging_simple          | 8.90 us | 2.81 us: 3.17x faster    |
| mako                    | 12.1 ms | 9.91 ms: 1.22x faster    |
| meteor_contest          | 113 ms  | 52.5 ms: 2.14x faster    |
| nbody                   | 95.2 ms | 9.52 ms: 10.00x faster   |
| nqueens                 | 120 ms  | 19.7 ms: 6.12x faster    |
| pathlib                 | 29.3 ms | 20.1 ms: 1.46x faster    |
| pickle                  | 11.7 us | 45.6 us: 3.91x slower    |
| pickle_dict             | 26.4 us | 80.3 us: 3.04x slower    |
| pickle_list             | 3.83 us | 4.15 us: 1.08x slower    |
| pickle_pure_python      | 397 us  | 177 us: 2.24x faster     |
| pidigits                | 177 ms  | 356 ms: 2.01x slower     |
| pyflate                 | 460 ms  | 295 ms: 1.56x faster     |
| python_startup          | 9.66 ms | 218 ms: 22.58x slower    |
| python_startup_no_site  | 7.16 ms | 99.2 ms: 13.87x slower   |
| raytrace                | 424 ms  | 28.7 ms: 14.78x faster   |
| regex_compile           | 184 ms  | 6.09 ms: 30.25x faster   |
| regex_dna               | 163 ms  | 1.56 sec: 9.59x slower   |
| regex_effbot            | 2.97 ms | 623 us: 4.78x faster     |
| regex_v8                | 22.9 ms | 10.1 ms: 2.27x faster    |
| richards                | 59.0 ms | 6.71 ms: 8.80x faster    |
| scimark_fft             | 462 ms  | 2.53 ms: 183.04x faster  |
| scimark_lu              | 151 ms  | 857 us: 176.22x faster   |
| scimark_monte_carlo     | 86.9 ms | 1.53 ms: 56.72x faster   |
| scimark_sor             | 151 ms  | 500 us: 301.76x faster   |
| scimark_sparse_mat_mult | 7.28 ms | 44.5 us: 163.45x faster  |
| spectral_norm           | 134 ms  | 2.16 ms: 61.96x faster   |
| sqlite_synth            | 3.68 us | 56.4 us: 15.32x slower   |
| sympy_expand            | 684 ms  | 144 ms: 4.74x faster     |
| sympy_integrate         | 25.1 ms | 71.3 ms: 2.84x slower    |
| sympy_sum               | 218 ms  | 184 ms: 1.19x faster     |
| sympy_str               | 398 ms  | 149 ms: 2.66x faster     |
| telco                   | 10.0 ms | 19.2 ms: 1.91x slower    |
| tornado_http            | 129 ms  | 231 ms: 1.79x slower     |
| unpack_sequence         | 37.8 ns | 314 ns: 8.29x slower     |
| unpickle                | 19.6 us | 165 us: 8.41x slower     |
| unpickle_list           | 5.80 us | 3.62 us: 1.60x faster    |
| unpickle_pure_python    | 325 us  | 177 us: 1.84x faster     |
| Geometric mean          | (ref)   | 2.71x faster             |
