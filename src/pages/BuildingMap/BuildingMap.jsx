    import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
    import { OrbitControls } from 'https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js';

    // Sahna yaratish
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 20);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Yorug‘lik
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    scene.add(light);

    // Binolar yaratish
    function createBuilding(x, z, height, color) {
        const geometry = new THREE.BoxGeometry(3, height, 3);
        const material = new THREE.MeshStandardMaterial({ color });
        const building = new THREE.Mesh(geometry, material);
        building.position.set(x, height / 2, z);
        scene.add(building);
    }

    createBuilding(0, 0, 8, 0xffaa00);  // Bino 1
    createBuilding(5, -5, 12, 0x00aaff); // Bino 2
    createBuilding(-5, 5, 6, 0x55ff55);  // Bino 3

    // Kamera nazorati
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Sahna render qilish
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
