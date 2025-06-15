
const EducationSection = () => (
  <section id="education" className="my-8 md:my-12 w-full max-w-3xl mx-auto">
    <h2 className="text-xl md:text-2xl font-bold text-accent font-mono mb-3 flex items-center justify-center gap-2 text-center">
      <span>// Education</span>
    </h2>
    <div className="bg-terminal rounded-lg border border-[#222] p-6 shadow-lg font-mono text-[1rem] text-foreground">
      <ul className="pl-4 list-disc">
        <li>
          <b>BEng (Hons), London Metropolitan University (First Class)</b> <br />
          <span className="text-secondary text-xs">Sep 2021 - Jul 2022</span>
        </li>
        <li>
          <b>HND in Software Engineering, Pearson (Merit)</b><br />
          <span className="text-secondary text-xs">Feb 2020 - Aug 2021</span>
        </li>
        <li>
          <b>G.C.E (A/L-2019), Physical Science Stream, Maliyadeva College</b><br />
          <span className="text-secondary text-xs">Jan 2006 - Aug 2019</span>
        </li>
      </ul>
    </div>
  </section>
);

export default EducationSection;
