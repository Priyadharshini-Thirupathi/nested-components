import _ from "lodash";
export function getTotalLength(inputs: string[], startIndex: number = 0) {
 return(
  _.reduce(
    _.slice(
      _.map(inputs, (input) => input.length),
      startIndex,
      inputs.length
    ),
    (sum, n) => sum + n,
    0
  )
 )
}

export default function utills() {
 return getTotalLength;
}
