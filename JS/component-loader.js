class ComponentLoader {
    constructor() {
        if (ComponentLoader.instance) {
            return ComponentLoader.instance;
        }
        ComponentLoader.instance = this;
    }

    // Function to load a single component
    loadComponent(elementId, filePath) {
        return fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${filePath}`);
                }
                return response.text();
            })
            .then(htmlContent => {
                document.getElementById(elementId).innerHTML = htmlContent;
            })
            .catch(error => console.error(error));
    }

    // Function to load all components
    loadAll(components) {
        components.forEach(component => {
            this.loadComponent(component.id, component.path);
        });
    }
}

// Export singleton instance
const instance = new ComponentLoader();
export default instance;
