const About = () => {
  const links = [
    {
      name: "Developer portal",
      href: "https://developer.marvel.com/documentation/getting_started",
    },
    {
      name: "Interactive Documentation",
      href: "https://developer.marvel.com/docs",
    },
    {
      name: "Authorization",
      href: "https://developer.marvel.com/documentation/authorization",
    },
    {
      name: "Help",
      href: "https://help.marvel.com/hc/en-us",
    },
  ];
  return (
    <>
      <ul>
        {links.map((link) => {
          return (
            <li>
              <a href={link.href}>{link.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default About;
