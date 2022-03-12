import { SysCall, SysCallResults } from './sys-calls';

export type Thread = Generator<SysCall | void, void, SysCallResults>;

export type ProcessMemory = Record<string, unknown> | undefined;

export abstract class Process<Memory extends ProcessMemory> {
  constructor(protected memory: Memory) {}
  abstract run(): Thread;
}

export type ProcessConstructor<Memory extends ProcessMemory> = new (
  memory: Memory
) => Process<Memory>;
