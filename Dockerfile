FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base

COPY --from=prod-deps /app/node_modules /app/node_modules
COPY input.sh /app/input.sh

ARG ARG_API_ID
ARG ARG_API_HASH

ENV API_ID=$ARG_API_ID
ENV API_HASH=$ARG_API_HASH

CMD ["sh", "/app/input.sh"]