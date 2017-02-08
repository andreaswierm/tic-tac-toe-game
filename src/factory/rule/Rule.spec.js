import Rule from './Rule';

describe('Rule', () => {
  describe('#isAWin()', () => {
    describe('vertical', () => {
      it('should return true when a whole vertical line belongs to one player', () => {
        const grid = {
          0: {0: true, 1: false, 2: false},
          1: {0: true, 1: false, 2: false},
          2: {0: true, 1: false, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return true when a whole vertical line belongs to one player', () => {
        const grid = {
          0: {0: false, 1: true, 2: false},
          1: {0: false, 1: true, 2: false},
          2: {0: false, 1: true, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return true when a whole vertical line belongs to one player', () => {
        const grid = {
          0: {0: false, 1: false, 2: true},
          1: {0: false, 1: false, 2: true},
          2: {0: false, 1: false, 2: true}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return false when a whole vertical line does not belongs to one player', () => {
        const grid = {
          0: {0: true, 1: false, 2: false},
          1: {0: true, 1: false, 2: false},
          2: {0: false, 1: false, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(false);
      });
    });

    describe('horizontal', () => {
      it('should return true when a whole horizontal line belongs to one player', () => {
        const grid = {
          0: {0: true, 1: true, 2: true},
          1: {0: false, 1: false, 2: false},
          2: {0: false, 1: false, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return true when a whole horizontal line belongs to one player', () => {
        const grid = {
          0: {0: false, 1: false, 2: false},
          1: {0: true, 1: true, 2: true},
          2: {0: false, 1: false, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return true when a whole horizontal line belongs to one player', () => {
        const grid = {
          0: {0: false, 1: false, 2: false},
          1: {0: false, 1: false, 2: false},
          2: {0: true, 1: true, 2: true}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return false when a whole horizontal line does not belongs to one player', () => {
        const grid = {
          0: {0: true, 1: true, 2: false},
          1: {0: false, 1: false, 2: false},
          2: {0: false, 1: false, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(false);
      });
    });

    describe('diagonal', () => {
      it('should return true when a whole diagonal line belongs to one player', () => {
        const grid = {
          0: {0: true, 1: false, 2: false},
          1: {0: false, 1: true, 2: false},
          2: {0: false, 1: false, 2: true}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return true when a whole diagonal line belongs to one player', () => {
        const grid = {
          0: {0: false, 1: false, 2: true},
          1: {0: false, 1: true, 2: false},
          2: {0: true, 1: false, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(true);
      });

      it('should return false when a whole diagonal line does not belongs to one player', () => {
        const grid = {
          0: {0: true, 1: false, 2: false},
          1: {0: false, 1: true, 2: false},
          2: {0: false, 1: false, 2: false}
        };

        expect(Rule.isAWin(grid))
          .toEqual(false);
      });
    });
  });

  describe('#isGameOver()', () => {
    it('should return true when all the grid cells are occupied', () => {
      const grid = {
        0: {
          0: true
        },
        1: {
          0: true
        }
      };

      expect(Rule.isGameOver(grid))
        .toEqual(true);
    });

    it('should return false when not all the grid cells are occupied', () => {
      const grid = {
        0: {
          0: false
        },
        1: {
          0: true
        }
      };

      expect(Rule.isGameOver(grid))
        .toEqual(false);
    });

    it('should return false when  all the grid cells are empty', () => {
      const grid = {
        0: {
          0: false
        },
        1: {
          0: false
        }
      };

      expect(Rule.isGameOver(grid))
        .toEqual(false);
    });
  });
});
