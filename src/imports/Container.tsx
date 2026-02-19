import imgContainer from "figma:asset/ea126a9dee2d9354f9fb83b72d65dd92c9329d3f.png";

function Container3() {
  return <div className="absolute border-2 border-[#096] border-solid left-0 opacity-30 rounded-[33554400px] size-[384px] top-0" data-name="Container" />;
}

function Container4() {
  return <div className="absolute border border-[#096] border-solid left-[-55.23px] opacity-30 rounded-[33554400px] size-[494.459px] top-[-55.23px]" data-name="Container" />;
}

function Container5() {
  return <div className="absolute border border-[#096] border-solid h-[567.59px] left-[-91.79px] opacity-28 rounded-[33554400px] top-[-91.79px] w-[567.589px]" data-name="Container" />;
}

function Container6() {
  return <div className="absolute border border-[#096] border-solid h-[590.436px] left-[-103.22px] opacity-24 rounded-[33554400px] top-[-103.22px] w-[590.435px]" data-name="Container" />;
}

function Container7() {
  return <div className="absolute border border-[#096] border-solid left-[-86.36px] opacity-20 rounded-[33554400px] size-[556.726px] top-[-86.36px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="h-[384px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[438.844px] items-start left-0 opacity-20 pt-[27.422px] px-[320px] top-0 w-[1024px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container8() {
  return <div className="absolute h-[438.844px] left-0 top-0 w-[1024px]" data-name="Container" />;
}

export default function Container() {
  return (
    <div className="overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgContainer} />
      <Container1 />
      <Container8 />
    </div>
  );
}