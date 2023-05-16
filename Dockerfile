FROM node:18.13.0@sha256:d9061fd0205c20cd47f70bdc879a7a84fb472b822d3ad3158aeef40698d2ce36

WORKDIR /home/node
COPY --chown=1000:1000 ./ ./

USER 1000

RUN npm install

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /home/node/

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "run", "start"]