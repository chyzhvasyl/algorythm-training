import {logger} from "../../shared";
import {trap} from "./Trapping Rain Water";

export * from './Trapping Rain Water';

export const main = (): void => {
  logger(trap, [2,1,0,1]);
}