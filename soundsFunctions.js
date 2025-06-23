///Sound files:
let SoundForBackgroundFlying = document.getElementById("SirenForBackground");

///Default loudness:
const LaserSound = document.getElementById('ShortLaserSound').volume = 0.1; /// sound of laser

const SoundOfDamage = document.getElementById('ShipDamageSound').volume = 0.1; /// sound of collision

const Sound_SirenForBackground = SoundForBackgroundFlying.volume = 0.005;
const Sound_RingOpeningDoor = document.getElementById("RingOpeningDoor").volume = 0.07;
const Sound_SoundOfDoorOnSpaseShip = document.getElementById("SoundOfDoorOnSpaseShip").volume = 0.01;
const Sound_SirenOpeningDoor = document.getElementById("SirenOpeningDoor").volume = 0.03;
const Sound_SirenClosingDoor = document.getElementById("SirenClosingDoor").volume = 0.0025;
const Sound_MainSoundBackground = document.getElementById('MainSoundBackground').volume = 1; //100%
var Sound_ShipEngineSound = document.getElementById('ShipEngineSound').volume = 0.1; //10%
const ZeroLoudness = 0;
const FullLoudness = 1;
const DefValueOfSoundTail = 0.025; /// Default value
let CurrentValueOfSoundTail = DefValueOfSoundTail; /// Default value for Function fallingStones() and GameOver()
///Default loudness:
SoundForBackgroundFlying.volume = 0.005;
document.getElementById("RingOpeningDoor").volume = 0.07;
document.getElementById("SoundOfDoorOnSpaseShip").volume = 0.01;
document.getElementById("SirenOpeningDoor").volume = 0.03;
document.getElementById("SirenClosingDoor").volume = 0.0025;
document.getElementById('MainSoundBackground').volume = 1; //100%
document.getElementById('ShipEngineSound').volume = 0.1; //10%


// sound

function MuteAllSounds(switchValue){
    console.log('sVol:', Sound_SirenForBackground);
    console.log('sVol:', Sound_RingOpeningDoor);
    console.log('sVol:', Sound_SoundOfDoorOnSpaseShip);
    console.log('sVol:', Sound_SirenOpeningDoor);
    console.log('sVol:', Sound_SirenClosingDoor);
    console.log('sVol:', Sound_MainSoundBackground);
    console.log('sVol:', Sound_ShipEngineSound);

    switch (switchValue) {
        
        case 0:
        // case SoundsOff:
            ///Mute sounds:
            SoundForBackgroundFlying.volume = ZeroLoudness; //      Sound_SirenForBackground;
            document.getElementById("RingOpeningDoor").volume = ZeroLoudness; //0.07;
            document.getElementById("SoundOfDoorOnSpaseShip").volume = ZeroLoudness; //0.01;
            document.getElementById("SirenOpeningDoor").volume = ZeroLoudness; //0.03;
            document.getElementById("SirenClosingDoor").volume = ZeroLoudness; //0.0025;
            document.getElementById('MainSoundBackground').volume = ZeroLoudness; //1; //100%
            document.getElementById('ShipEngineSound').volume = ZeroLoudness; //0.1; //10%
            CurrentValueOfSoundTail = ZeroLoudness;
            document.getElementById('ShipDamageSound').volume = ZeroLoudness;
            document.getElementById('ShortLaserSound').volume = ZeroLoudness;
            ///buttons switch:
            document.getElementById('MuteAllBtn').classList.add('d-none');
            document.getElementById('UnmuteAllBtn').classList.remove('d-none');
            break;
        case 1:
        // case SoundsOn:
            ///Unmute sounds:
            SoundForBackgroundFlying.volume = Sound_SirenForBackground;
            document.getElementById("RingOpeningDoor").volume = 0.07;
            document.getElementById("SoundOfDoorOnSpaseShip").volume = 0.01;
            document.getElementById("SirenOpeningDoor").volume = 0.03;
            document.getElementById("SirenClosingDoor").volume = 0.0025;
            document.getElementById('MainSoundBackground').volume = 1; //100%
            document.getElementById('ShipEngineSound').volume = 0.1; //10%
            CurrentValueOfSoundTail = DefValueOfSoundTail;
            document.getElementById('ShipDamageSound').volume = 0.1;
            document.getElementById('ShortLaserSound').volume = 0.1;
            ///buttons switch:
            document.getElementById('UnmuteAllBtn').classList.add('d-none');
            document.getElementById('MuteAllBtn').classList.remove('d-none');
            break;
        case 2:
        // case MusicOff:
            ///Unmute sounds:
            document.getElementById('MainSoundBackground').volume = ZeroLoudness; //0%
            ///buttons switch:
            document.getElementById('MuteMusicBtn').classList.add('d-none');
            document.getElementById('UnmuteMusicBtn').classList.remove('d-none');
            break;
        case 3:
        // case MusicOn:
            ///Unmute music:
            document.getElementById('MainSoundBackground').volume = FullLoudness ; //100%
            ///buttons switch:

            document.getElementById('UnmuteMusicBtn').classList.add('d-none');
            document.getElementById('MuteMusicBtn').classList.remove('d-none');
            break;

    
        default:
            break;
    }
}

var pause = true;
var play = false;
function MuteMusic(){
    if (pause == true){
        // document.getElementById('MainSoundBackground').pause();
        document.getElementById('MainSoundBackground').volume = ZeroLoudness;
        pause = false;
        play = false;
    } if(play == true){
        // document.getElementById('MainSoundBackground').play();
        document.getElementById('MainSoundBackground').volume = Sound_MainSoundBackground;
        pause = true;
    }
    play == true;
    return play, pause;
} 
// _________

    // var SoundGroup = document.getElementById('SoundGroup');
    // var element = SoundGroup.children[length];


    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     document.getElementById('SoundGroup').children[length].;
    //     // index++;
    // }

// ________________
    /////templates
    // SoundGroup.forEach(element => {
        
    // });


    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
            
    // }
