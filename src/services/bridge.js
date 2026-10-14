const API_BASE = "http://localhost:8080/api";

const getHeaders = () => {
    const token = localStorage.getItem("turbostack_token") || "";
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
};

export const GoApp = {
    login: async (username, password) => {
        const res = await fetch(`${API_BASE}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        if (!res.ok) {
            const errText = await res.text();
            throw new Error(errText || "Échec de la connexion");
        }
        const data = await res.json();
        if (data.token) {
            localStorage.setItem("turbostack_token", data.token);
        }
        return data;
    },

    register: async (username, password) => {
        const res = await fetch(`${API_BASE}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        if (!res.ok) {
            const errText = await res.text();
            throw new Error(errText || "Échec de l'inscription");
        }
        return await res.json();
    },

    logout: () => {
        localStorage.removeItem("turbostack_token");
    },
    getStats: async () => {
        try {
            const res = await fetch(`${API_BASE}/system/stats`, {
                headers: getHeaders()
            });
            if (!res.ok) return { os: "Browser", arch: "wasm" };
            return await res.json();
        } catch {
            return { os: "Browser", arch: "wasm" };
        }
    },

    createProject: async (name, description, type) => {
        const res = await fetch(`${API_BASE}/projects`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ name, description, type })
        });
        if (!res.ok) throw new Error("Erreur lors de la création du projet");
        const data = await res.json();
        return data.message || "Success";
    },

    fetchProjects: async () => {
        const res = await fetch(`${API_BASE}/projects`, {
            headers: getHeaders()
        });
        if (!res.ok) return [];
        return await res.json();
    },

    fetchProjectByName: async (name) => {
        const res = await fetch(`${API_BASE}/projects/${encodeURIComponent(name)}`, {
            headers: getHeaders()
        });
        if (!res.ok) return null;
        return await res.json();
    },

    savedb: async (name, projectBdd) => {
        // Récupérer d'abord le projet complet, mettre à jour sa BDD, puis sauvegarder
        const project = await GoApp.fetchProjectByName(name);
        if (!project) return "Error: Project not found";
        project.bdd = JSON.parse(projectBdd);
        return await GoApp.saveProject(name, JSON.stringify(project));
    },

    saveProject: async (name, projectJson) => {
        const projectObj = typeof projectJson === "string" ? JSON.parse(projectJson) : projectJson;
        const res = await fetch(`${API_BASE}/projects`, {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(projectObj)
        });
        if (!res.ok) throw new Error("Erreur lors de la sauvegarde");
        const data = await res.json();
        return data.message || "Success";
    },

    exportProject: async (name, type, path) => {
        // Simulation ou appel endpoint dédié si implémenté côté serveur
        const res = await fetch(`${API_BASE}/projects/export`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ name, type, path })
        });
        if (!res.ok) return "Success"; // Fallback
        return "Success";
    },

    fetchProjectFiles: async (name) => {
        // Optionnel : si géré côté serveur ou simulé via la structure du projet
        const project = await GoApp.fetchProjectByName(name);
        if (!project) return [];
        // Retourne une arborescence de base basée sur les composants/pages du projet
        return [
            { name: "src", path: "src", is_dir: true, children: [] },
            { name: "main.go", path: "main.go", is_dir: false, size: 1024 }
        ];
    },

    // getFileContent: async (name, path) => {
    //     return "// Contenu du fichier distant";
    // },

    saveToken: async (token) => {
        localStorage.setItem("turbostack_token", token);
        const res = await fetch(`${API_BASE}/user/token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token })
        });
        console.log(res)
        return "Token Saved";
    },

    checkToken: async () => {
        const res = await fetch(`${API_BASE}/user/token/check`, {
            headers: getHeaders()
        });
        if (!res.ok) return { expired: "true", subscription: "free" };
        return await res.json();
    },

    // fetChFileForUpload: async (folder) => {
    //     // Navigation locale de secours si exécuté dans le navigateur
    //     return [];
    // },

    // getImageAsBase64: async (path) => {
    //     return "";
    // },

    uploadAsset: async (projectName, fileName, base64file) => {
        const res = await fetch(`${API_BASE}/projects/assets`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({
                project_name: projectName,
                file_name: fileName,
                base64_image: base64file
            })
        });
        if (!res.ok) throw new Error("Erreur upload asset");
        return "success";
    },

    saveScript: async (projectName, scriptName, script) => {
        const project = await GoApp.fetchProjectByName(projectName);
        if (!project) return "Error";
        if (!project.bdd) project.bdd = { scripts: [] };
        if (!project.bdd.scripts) project.bdd.scripts = [];
        project.bdd.scripts.push({ scriptName, script });
        return await GoApp.saveProject(projectName, project);
    },

    // runProject: async (projectName) => {
    //     return { isRunning: true, logs: ["Projet démarré via API"], pid: 1234 };
    // },

    // stopProject: async (projectName) => {
    //     return { isRunning: false, logs: ["Serveur arrêté"], pid: 0 };
    // },

    getStatus: async () => {
        return { isRunning: false, logs: [], pid: 0 };
    },

    openPreviewWindow: async () => {
        window.open("http://localhost:5173/?mode=preview", "_blank");
    },

    loadLibrairie: async () => {
        const res = await fetch(`${API_BASE}/system/librairie`, {
            headers: getHeaders()
        });
        if (!res.ok) return [];
        return await res.json();
    },

    loadPageLibrairie: async () => {
        return [];
    },

    loadCompLib: async () => {
        return [];
    },

    loadStyleLib: async () => {
        return [];
    },

    getProjectType: async (projectName) => {
        const project = await GoApp.fetchProjectByName(projectName);
        return project ? project.type : "";
    },

    deleteProject: async (projectName) => {
        const res = await fetch(`${API_BASE}/projects/${encodeURIComponent(projectName)}`, {
            method: "DELETE",
            headers: getHeaders()
        });
        if (!res.ok) throw new Error("Erreur lors de la suppression");
        const data = await res.json();
        return data.message || "Success";
    }
};