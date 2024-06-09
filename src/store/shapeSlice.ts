import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShapeState {
  shapes: string[];
  positions: { [key: number]: number[] };
  isTopLeftAligned: boolean; 
  row1Style: React.CSSProperties; 
  row2Style: React.CSSProperties; 
}

const initialState: ShapeState = {
  shapes: ['circle', 'square', 'triangle', 'trapezoid', 'ellipse', 'parallelogram'],
  positions: {
    0: [0, 0],
    1: [0, 1],
    2: [0, 2],
    3: [1, 0],
    4: [1, 1],
    5: [1, 2]
  },
  isTopLeftAligned: true, 
  row1Style: { display: "grid", justifyContent: "end" }, 
  row2Style: { display: "grid", justifyContent: "start" }, 
};

const shapesSlice = createSlice({
  name: 'shapes',
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<string>) => {
      state.shapes.push(action.payload);
    },
    removeShape: (state, action: PayloadAction<number>) => {
      state.shapes.splice(action.payload, 1);
    },
    randomizeShapes: (state) => {
      state.shapes = state.shapes.sort(() => Math.random() - 0.5);
    },
    moveShapeLeft: (state) => {
      const firstShape = state.shapes.shift();
      if (firstShape) state.shapes.push(firstShape);
    },
    moveShapeRight: (state) => {
      const lastShape = state.shapes.pop();
      if (lastShape) state.shapes.unshift(lastShape);
    },
    movePosition: (state) => {
      if (state.isTopLeftAligned) {
        state.positions = {
          0: [0, 0],
          1: [0, 1],
          2: [0, 2],
          3: [1, 2],
          4: [1, 1],
          5: [1, 0],
        };
        state.row1Style = { display: "grid", justifyContent: "end" };
        state.row2Style = { display: "grid", justifyContent: "start" };
      } else {
        state.positions = {
          0: [0, 2],
          1: [0, 1],
          2: [0, 0],
          3: [1, 0],
          4: [1, 1],
          5: [1, 2],
        };
        state.row1Style = { display: "grid", justifyContent: "start" };
        state.row2Style = { display: "grid", justifyContent: "end" };
      }
      state.isTopLeftAligned = !state.isTopLeftAligned;
    },
  },
});

export const { addShape, removeShape, randomizeShapes, moveShapeLeft, moveShapeRight, movePosition } = shapesSlice.actions;

export default shapesSlice.reducer;
