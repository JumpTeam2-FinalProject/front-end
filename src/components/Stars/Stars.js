import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

const RatingStars = ({
  value
}) => (
  <div
    style={{
      display: "flex",
      lineHeight: 1.2,
      paddingBottom: "0.1em"
    }}
  >
    {Array(Math.floor(value + 0.25)) // <- gets the floor of [value rounded to the nearest half]
      .fill()
      .map((_, i) => (
          <small key={i}>
              <TiStarFullOutline />
          </small>
      ))}
    <small>
        { // Purpose: Check if value rounded to nearest half includes a half (is not an integer)?
            // Method: Double rating. Round to nearest integer. If odd then include half star; if even number do not include.
        Math.floor((value * 2) + 0.5) % 2 === 1 && (
            <TiStarHalfOutline />
        )}
    </small>
  </div>
);

export default RatingStars;
