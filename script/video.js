
const video = document.getElementById('myVideo');

        function toggleFullscreen() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen(); // Chrome and Safari
            }
        }
