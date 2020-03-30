import {floor, range} from "lodash";

export default ({ quantity, current, max }) => {
  const side = floor(max / 2);
  const delta = (max % 2) - 1;
  let start;
  let end;
  if (current - side <= 0) {
    // левый край
    start = 1;
    end = start + max;
  } else if (current + side >= quantity) {
    // правый край
    end = quantity + 1;
    start = end - max;
  } else {
    // центр
    start = current - side - delta;
    end = current + side + 1;
  }
  if (end > quantity) {
    end = quantity + 1;
  }
  if (start < 1) {
    start = 1;
  }
  const pages = range(start, end);
  return pages;
};