# Real World Economy

## Intent

An app that can surface fuel economy powered by the experience
of real drivers.

## Premise

Data presented online from manufacturers is unrealistic or only
valid when the vehicle is brand new and degrades over time and isn't
as useful in traffic or the used car market.

## Motivation

As an exercise to practice web development and perhaps mobile
app development. Given the state of the app marketplaces I believe
it's better to deal with a PWA first.

## Progress

Nothing significant so far, just the boilerplate and the mobile
development environment

## Development

Currently working on *Android 16* (ie _Pixel 7_) via the (Debian)
*Terminal* app.

Install *deno* and then `git clone` and `deno install`.

You should end up with something that can be opened via
`deno task dev`.

For editing I am using *Squircle CE* with an SFTP mount into the
Linux container. To get SFTP you need to `sudo apt install openssh-sftp-server`
and set it to a higher port `echo 2222 | sudo tee /etc/ssh/sshd_config.d/port.conf`,
and then generate a key `ssh-keygen -f /mnt/shared/droid_key && cat /mnt/shared/droid_key.pub | tee -a ~/.ssh/authorized_keys`.

## Plan

I like being able to make a PWA on my phone so we'll start with
tracking your own car privately.

Therefore we'll be using `localStorage` for now, but we will need
an import-export backup scheme, possibly via QR code.

## Data Model

List of Car Models

List of Cars

Odometer

Fuel Receipts

Snapshots of Trip Computers the show Fuel Consumption

Comments on conditions of particular trips

## Ideas

* What open day sources or APIs can I leverage?
 * Green Vehicle Guide?
 * Redbook?
 * Departments of Transport registration lookup?
 * Image search for car models?
 * Wikipedia for car details?
 * Unit conversion? L/100km, km/L, mpg
 * Tyre size calculator
 * Scaling for fuel octane

Boilerplate below...

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
