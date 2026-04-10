/* Example resource card HTML:
<a href="https://github.com/kirbycope/godot-3d-player-controller-v2" alt="3D Player Controller Addon" class="resource" target="_blank">
    <img src="https://timothycope.com/img/projects/godot-3d-player-controller-v2.png" alt="Resource">
    <div>
        <h4>Godot 3D Player Controller (v.2)</h4>
        <p>A drop-in 3D player controller with a Finite State Machine (FSM) and in-game menus for quick prototyping.</p>
    </div>
</a>
*/

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM Content Loaded, waiting for projects to load");
  fetch('resources.json')
    .then(response => response.json())
    .then(data => {
      const resourcesWrapper = document.querySelector('.resources-wrapper');
      data.forEach(resource => {
        const resourceCard = document.createElement('a');
        resourceCard.href = resource.url;
        resourceCard.className = 'resource';
        resourceCard.target = '_blank';
        resourceCard.innerHTML = `
          <img src="${resource.image}" alt="Resource">
          <div>
            <h4>${resource.name}</h4>
            <p>${resource.description}</p>
          </div>
        `;
        resourcesWrapper.appendChild(resourceCard);
      });
    })
    .catch(error => console.error('Error loading resources:', error));
});