import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';


const PopoverDemo = () => (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger pb-8">Show info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Some content
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );

  export default PopoverDemo;
