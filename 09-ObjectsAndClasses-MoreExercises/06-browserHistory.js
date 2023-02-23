function main(input, actions) {
    let history = input
    
    actions.forEach(el => {
        let [action, ...site] = el.split(" ")
        site = site.join(" ")
        if (action === 'Open') {
            history['Open Tabs'].push(site);
            history['Browser Logs'].push(el)
        } else if (action === "Close"){
            if (history['Open Tabs'].includes(site)) {
                let index = history['Open Tabs'].indexOf(site);
                history['Open Tabs'].splice(index, 1);
                history['Recently Closed'].push(site)
                history['Browser Logs'].push(el)
            }
        } else if (action === 'Clear') {
            history['Open Tabs'] = [];
            history['Recently Closed'] = [];
            history['Browser Logs'] = [];
        }
    });
    console.log(`${history['Browser Name']}`);
    console.log(`Open Tabs: ${history['Open Tabs'].join(", ")}`);
    console.log(`Recently Closed: ${history['Recently Closed'].join(", ")}`);
    console.log(`Browser Logs: ${history['Browser Logs'].join(", ")}`);
}

main({
    "Browser Name":"Google Chrome",
    "Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)