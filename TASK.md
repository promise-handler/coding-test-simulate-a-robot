# Coding Test - Simulate a robot

Write a program that simulates the movements of a robot. The robot can have three possible movements:

    turn right
    turn left
    advance

The robot is placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of `{x,y}` coordinates,
e.g., `{3,8}`, with coordinates increasing to the north and east.

## Requirements

- Create a Class `Robot` that exposes a method `execute` which given a number of instructions will calculate the robot's new coordinates, and the direction in which it is facing.
- The argument of the `execute` method is a `string` in the format `X Y BEARING COMMANDS`. 
- The method should return a one-liner `string` in the format `X Y BEARING`.
- Provide instructions to demonstrate the program works as required

## Example

The letter-string `RAALAL` means:

    Turn right
    Advance twice
    Turn left
    Advance once
    Turn left yet again

Say a robot starts at `{7, 3}` facing north. Running this stream of instructions should leave it at `{9, 4}` facing west.

In the example above, the arguments for `execute` would be `7 3 NORTH RAALAL`, and the method should return `9 4 WEST`.