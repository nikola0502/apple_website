import { OrbitControls, View } from '@react-three/drei'
import { Suspense } from 'react'
import Lights from './Lights'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import IPhone from './IPhone'
import Loader from './Loader'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRtoationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-50%]' : ''}  `}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <perspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={() => setRtoationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0,0,0]} >
        <Suspense fallback={<Loader />}>
          <IPhone 
            scale={index === 1 ? [25, 25, 25] : [27, 27, 27]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView