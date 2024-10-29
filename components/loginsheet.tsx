import React from 'react'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import type { SheetProps } from '@tamagui/sheet';
import { Sheet, useSheet } from '@tamagui/sheet';

import { Button, H1, H2, Input, Paragraph, Text, XStack, YStack } from 'tamagui'
import LoginTab from './loginTab';
import { toggleStore } from 'stores/toggleStore';

const spModes = ['percent', 'constant', 'fit', 'mixed'] as const

export const LoginSheet = ({open, setOpen}) => {
  const [position, setPosition] = React.useState(0)
  //   const [open, setOpen] = React.useState(false)
  const {login, toggleLogin} = toggleStore((state) => state);
  
  const [modal, setModal] = React.useState(true)
  const [innerOpen, setInnerOpen] = React.useState(false)
  const [snapPointsMode, setSnapPointsMode] =
    React.useState<(typeof spModes)[number]>('percent')
  const [mixedFitDemo, setMixedFitDemo] = React.useState(false)

  const isPercent = snapPointsMode === 'percent'
  const isConstant = snapPointsMode === 'constant'
  const isFit = snapPointsMode === 'fit'
  const isMixed = snapPointsMode === 'mixed'
  const snapPoints = isPercent
    ? [85, 50, 25]
    : isConstant
      ? [256, 190]
      : isFit
        ? undefined
        : mixedFitDemo
          ? ['fit', 110]
          : ['80%', 256, 190]

  return (
    <>
      

      <Sheet
        forceRemoveScrollEnabled={login}
        modal={modal}
        open={login}
        onOpenChange={toggleLogin}
        snapPoints={snapPoints}
        snapPointsMode={snapPointsMode}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="medium"
      >
        <Sheet.Overlay
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

          <Button size="$6" circular icon={ChevronDown} onPress={toggleLogin} />
        <Sheet.Handle />
        <Sheet.Frame padding="$4" justifyContent="center" alignItems="center" space="$5">
          <LoginTab />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
