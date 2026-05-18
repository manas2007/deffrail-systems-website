import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const DButton = (props) => {

  const { text, cta, arrow, theme } = props;

  return (<button onClick={cta} className={theme == "SOLID" ? "bg-[#2e78bc] text-white px-[1rem] py-[0.5rem] rounded-[8px] font-medium" : theme == "LIGHT" ? "text-black bg-white px-[1rem] py-[0.5rem] rounded-[8px] font-medium" : ""}>{text} {arrow ? <ArrowRightAltIcon /> : ""}</button>)

}

export default DButton