import * as THREE from 'three'
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { RigidBody, Physics } from '@react-three/rapier';

function Scene () {

    const [mousePos, setMousePos] = useState({x:0, y:0});

    useEffect(() => {
        const handleMousePos = (e:MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

    })

    return (
    <Canvas>
        <OrbitControls makeDefault/>
        <ambientLight />
        <directionalLight />
        <Physics debug>
            <RigidBody gravityScale={0} colliders="ball">
                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial color={'hotpink'}/>
                </mesh>
            </RigidBody>
        </Physics>
    </Canvas>)
}

export default Scene;