const TwoParaTitle = ({
    title,
    paragraph,
    paragraph2,
    width = "auto",
    center,
    mb = "50px",
  }: {
    title: string;
    paragraph: string;
    paragraph2: string;
    width?: string;
    center?: boolean;
    mb?: string;
  }) => {
    return (
      <>
        <div
          className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
          data-wow-delay=".1s"
          style={{ maxWidth: width, marginBottom: mb }}
        >
          <h2 className="mb-4 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] lg:text-3xl">
            {title}
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
          <br/>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph2}
          </p>
        </div>
      </>
    );
  };
  
  export default TwoParaTitle;
  