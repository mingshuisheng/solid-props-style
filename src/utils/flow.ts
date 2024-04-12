type processor<PROPS> = (props: PROPS) => PROPS

export function flow<PROPS = any>(...processors: processor<PROPS>[]) {
  return (data: PROPS) => {
    for (const processor of processors) {
      data = processor(data);
    }
    return data
  }
}
