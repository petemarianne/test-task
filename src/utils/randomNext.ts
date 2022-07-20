export const randomNext = (number: number, zero: number): number => {
    switch (zero) {
        case 0:
            switch (number) {
                case 0: return -10;
                case 1: return 1;
                case 2: return 10;
                case 3: return -1;
                default: return 0;
            }
        case 1:
            switch (number) {
                case 3: return -10;
                case 0: return 1;
                case 1: return 10;
                case 2: return -1;
                default: return 0;
            }
        case 2:
            switch (number) {
                case 2: return -10;
                case 3: return 1;
                case 0: return 10;
                case 1: return -1;
                default: return 0;
            }
        case 3:
            switch (number) {
                case 1: return -10;
                case 2: return 1;
                case 3: return 10;
                case 0: return -1;
                default: return 0;
            }
        default: return 0;
    }
}
