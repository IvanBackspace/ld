function getThumbnailUrl() {
    const videoUrl = document.getElementById("video-url").value;
    fetch(`/thumbnail?url=${videoUrl}`)
      .then(response => response.text())
      .then(thumbnailUrl => {
        const thumbnailContainer = document.getElementById("thumbnail-container");
        thumbnailContainer.innerHTML = `<img src="${thumbnailUrl}">`;
      });
  }