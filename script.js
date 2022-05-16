(function() {
    const ACTIVE_TAB_CLASS = 'tab-btn-checked';
    const FIRST_ACTIVE_TAB_ID = 'tabBtn1';
    const TIMEOUT = 2000;

    const tabs = {
        tabBtn1: document.getElementById(FIRST_ACTIVE_TAB_ID),
        tabBtn2: document.getElementById('tabBtn2'),
        tabBtn3: document.getElementById('tabBtn3'),
    };
    const scrollableContainer = document.getElementById('scrollableContainer');
    let activeTab = null;
    let offset = 0;

    function getScrollableSection(btnId) {
        return document.querySelector(`[data-tab-btn-id="${btnId}"]`);
    }

    function activateTab(btnId) {
        if (activeTab) {
            activeTab.classList.remove(ACTIVE_TAB_CLASS);
        }
        activeTab = tabs[btnId];
        activeTab.classList.add(ACTIVE_TAB_CLASS);
        const section = getScrollableSection(btnId);
        offset = scrollableContainer.getBoundingClientRect().y - section.getBoundingClientRect().y;
        scrollableContainer.style.transform = `translateY(${offset + 'px'})`;
    }

    function getNextTab() {
        const tabsArray = Object.values(tabs);
        const currentIndex = tabsArray.indexOf(activeTab);
        let nextIndex = currentIndex + 1;
        if (nextIndex === tabsArray.length) {
            nextIndex = 0;
        }
        return tabsArray[nextIndex];
    }

    function setAutomaticSwitchTimer() {
        return setInterval(() => {
            const nextTab = getNextTab();
            activateTab(nextTab.getAttribute('id'));
        }, TIMEOUT)
    }

    let timer = setAutomaticSwitchTimer();

    function addTabListeners() {
        const listener = (event) => {
            clearInterval(timer);
            activateTab(event.currentTarget.getAttribute('id'));
            timer = setAutomaticSwitchTimer();
        };
        Object.values(tabs).forEach((btn) => {
            btn.addEventListener('click', listener);
        });
    }

    function main() {
        addTabListeners();
        activateTab(FIRST_ACTIVE_TAB_ID);
    }

    main();
})()
