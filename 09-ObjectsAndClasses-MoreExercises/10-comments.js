function main(input) {
    let users = [];
    let articles = []
    let comments = {}
    input.forEach(element => {
        let data = element.split(" ");
        // console.log(data);
        if (data[0] === 'user') {
            users.push(data[1])
        } else if (data[0] === 'article') {
            articles.push(data[1]);
            comments[data[1]]= []
        } else {
            let new_data = element.split(": ");
            let first = new_data[0].split(" ");
            let user = first.shift();
            first.shift();
            first.shift();
            let article = first.shift();
            // console.log(user, article);
            let second = new_data[1].split(", ");
            let title = second.shift();
            let comment = second.shift();
            // console.log(title, comment);
            if (users.includes(user) && articles.includes(article)) {
                comments[article].push({'user': user, 'title': title, 'comment': comment})
            }
        }
    });
    const sortable = Object.entries(comments)
    .sort(([,a],[,b]) => b.length - a.length)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
    for (let key in sortable) {
        console.log(`Comments on ${key}`);
        let sorted = comments[key].sort((a, b) => a['user'].localeCompare(b['user']));
        sorted.forEach(el => {
            console.log(`--- From user ${el.user}: ${el.title} - ${el.comment}`);
        });
    }
}   

main([
    'user aUser123', 
    'someUser posts on someArticle: NoTitle, stupidComment', 
    'article Books', 
    'article Movies', 
    'article Shopping', 
    'user someUser', 
    'user uSeR4', 
    'user lastUser', 
    'uSeR4 posts on Books: I like books, I do really like them', 
    'uSeR4 posts on Movies: I also like movies, I really do', 
    'someUser posts on Shopping: title, I go shopping every day', 
    'someUser posts on Movies: Like, I also like movies very much'])