function main(input) {
    let songs = []
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name,
            this.time = time
        }
    }
    input.shift();
    let filter = input.pop();

    input.forEach(el => {
        let [typeList, name, time] = el.split("_");
        songs.push(new Song(typeList, name, time));
    });
    for (let i = 0; i < songs.length; i++) {
        if (filter === 'all') {
            console.log(songs[i].name);
        } else {
            if (filter === songs[i].typeList) {
                console.log(songs[i].name);
            }
        }
        
    }
}

// main([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
//     )

// main([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
//     )
main([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
    