import type { TrpcRouter } from '@mathmind/backend/src/trpc';
import { createTRPCReact } from '@trpc/react-query';

export const tprc = createTRPCReact<TrpcRouter>();
