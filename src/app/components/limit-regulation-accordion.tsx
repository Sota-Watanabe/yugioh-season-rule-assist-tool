import { css } from "@emotion/react";
import { limitRegulationList } from "@/app/domains/models/limit-regulation-list";
import { useState } from "react";

type Props = {
  value: (typeof limitRegulationList)[number];
};

const main = css`
  width: 968px;
  margin: auto;
  button {
    color: #1a0dab;
    font-family: Dela Gothic One;
    font-size: 36px;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .links {
    margin-left: 29px;
    a {
      margin: 16px 0;
      display: block;
      text-decoration: none;
    }
  }
`;

export const LimitRegulationAccordion: React.FC<Props> = ({ value }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div css={main}>
      <button onClick={() => setIsOpen((prev) => !prev)}>{value.name}</button>
      {isOpen && (
        <div className="links">
          {value.links.map((link) => (
            <a href={link.href} target="_blank" key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
