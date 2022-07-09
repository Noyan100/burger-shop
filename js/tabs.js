(function(){
    let tabBtns = Array.from(document.querySelectorAll(".tab__selection-item"));
    let tabSliders = Array.from(document.querySelectorAll(".tab-slider"));
    
    let tabBtnActive = tabBtns[0];
    let tabSliderActive = tabSliders[0];
    tabBtnActive.classList.add('tab__selection-item--active');
    tabSliderActive.classList.add('tab-slider--active');
    
    tabBtns.forEach((element) => {
        element.addEventListener('click', onClickBtn)
    })
    
    function onClickBtn (e) {
        e.preventDefault();
        changeBtn(e.target);
    }
    
    function changeBtn (button) {
        if (button.classList.contains("tab__selection-item--active")){
            return;
        }
        tabBtnActive.classList.remove('tab__selection-item--active');
        button.classList.add('tab__selection-item--active');
        tabBtnActive = button;
        changeSlider(button);
    }
    
    function changeSlider (slider) {
        const tabSliderId = tabBtns.indexOf(slider);
        tabSliderActive.classList.remove('tab-slider--active');
        tabSliderActive = tabSliders[tabSliderId];
        tabSliderActive.classList.add('tab-slider--active');
    }
}) ();