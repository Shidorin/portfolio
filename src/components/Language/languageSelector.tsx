import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setLanguage } from "../../store/actions";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const LanguageSelector = () => {
  const language = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch();

  const [showDropdown, setShowDropdown] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (selectedLanguage: string) => {
    setShowDropdown(false);
    dispatch(setLanguage(selectedLanguage));
  };

  // hide dropdown when outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !(selectRef.current as Node).contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  // selected option
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownTSX = (
    <div className="absolute top-full w-full border bg-stone-100">
      <div
        className="flex cursor-pointer content-between items-center p-2 hover:text-primaryText"
        onClick={() => handleLanguageChange("en")}
      >
        <img
          width="32"
          className="pr-1"
          alt="english"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/64px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
        />
        {"EN"}
      </div>
      <div
        className="flex cursor-pointer content-between items-center p-2 hover:text-primaryText"
        onClick={() => handleLanguageChange("pl")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 480"
          className="pr-1"
        >
          <g fillRule="evenodd">
            <path fill="#dc143c" d="M10 10h620v460H10z"></path>
            <path fill="#fff" d="M10 10h620v230H10z"></path>
          </g>
        </svg>
        {"PL"}
      </div>
    </div>
  );

  return (
    <div
      ref={selectRef}
      className="relative flex w-fit cursor-pointer text-dark"
    >
      <div
        className="button-primary flex items-center justify-center "
        role="listbox"
        onClick={handleDropdownClick}
      >
        <span>{language.language}</span>
        {
          <MdOutlineKeyboardArrowDown
            className={`ml-1 transition ${showDropdown && "rotate-180"}`}
          />
        }
      </div>
      {showDropdown && dropdownTSX}
    </div>
  );
};

export default LanguageSelector;
