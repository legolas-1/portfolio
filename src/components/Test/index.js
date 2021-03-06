import './Test.css';

const Test = () => {

  const scrollToEle = (scrollEle) => {
    const data = scrollEle ? document.querySelector(scrollEle) : null;
    if (data) {
      data.scrollIntoView(true);
    }
  };
  
  
	return (
		<button class="button">
      Fancy Button
      <div class="button__horizontal"></div>
      <div class="button__vertical"></div>
    </button>
	)
}

export default Test;