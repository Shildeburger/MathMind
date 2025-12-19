import { initTRPC } from '@trpc/server';

const trpc = initTRPC.create();

const gamemods = [
  { key: 'classic', name: 'Classic', description: 'classic' },
  { key: 'timed', name: 'Timed', description: 'timed' },
  { key: 'challenge', name: 'Challenge', description: 'challenge' },
];

export const trpcRouter = trpc.router({
  getGameMode: trpc.procedure.query(() => {
    return { gamemods };
  }),
});
export type TrpcRouter = typeof trpcRouter;
