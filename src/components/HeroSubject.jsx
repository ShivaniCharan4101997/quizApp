import BigButton from "../ui/BigButton";

const Subjects = [
  {
    id: 1,
    name: "HTML",
    slug: "html",
    img: "/assets/images/icon-html.svg",
    iconBg: "#FFF1E9",
  },
  {
    id: 2,
    name: "CSS",
    slug: "css",
    img: "/assets/images/icon-css.svg",
    iconBg: "#E0FDEF",
  },
  {
    id: 3,
    name: "Javascript",
    slug: "js",
    img: "/assets/images/icon-js.svg",
    iconBg: "#EBF0FF",
  },
  {
    id: 4,
    name: "Accessibility",
    slug: "accessibility",
    img: "/assets/images/icon-accessibility.svg",
    iconBg: "#F6E7FF",
  },
];
function HeroSubject() {
  const tags = Subjects.map((subject) => {
    return <BigButton key={subject.id} subject={subject} />;
  });
  return <div className="">{tags}</div>;
}

export default HeroSubject;
