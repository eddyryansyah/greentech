interface Iprops {
  classname?: string;
  children?: React.ReactNode;
}

const Description = (props: Iprops) => {
  const { classname, children } = props;
  return <div className={classname}>{children}</div>;
};

export default Description;
