/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function when(condition, trueCase, falseCase) {
  return condition ? trueCase() : falseCase == null ? void 0 : falseCase();
}
export {
  when
};
