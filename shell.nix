{
  sources ? import ./sources.nix,
  nixpkgs ? sources.nixpkgs,
  niv ? sources.niv,
  mkCli ? sources.mkCli,
  rust-overlay ? sources.rust-overlay,
}: let
  niv-overlay = self: _: {
    niv = self.symlinkJoin {
      name = "niv";
      paths = [niv];
      buildInputs = [self.makeWrapper];
      postBuild = ''
        wrapProgram $out/bin/niv \
          --add-flags "--sources-file ${toString ./sources.json}"
      '';
    };
  };

  mkCli-overlay = import "${mkCli}/overlay.nix";

  pkgs = import nixpkgs {
    overlays = [
      niv-overlay
      mkCli-overlay
      (import rust-overlay)
    ];
    config = {};
  };

  cli = pkgs.lib.mkCli "cli" {
    _noAll = true;

    install = "${pkgs.nodejs}/bin/npm ci";

    start = "${pkgs.nodejs}/bin/npm run dev";

    test = {
      nix = {
        lint = "${pkgs.statix}/bin/statix check --ignore node_modules .";
        dead-code = "${pkgs.deadnix}/bin/deadnix --exclude ./node_modules .";
        format = "${pkgs.alejandra}/bin/alejandra --exclude ./node_modules --check .";
      };
      node = {
        lint = "${pkgs.nodejs}/bin/npm run test:lint";
        types = "${pkgs.nodejs}/bin/npm run test:types";
        format = "${pkgs.nodejs}/bin/npm run test:format";
        unit = "${pkgs.nodejs}/bin/npm run test:unit";
      };
    };

    fix = {
      nix = {
        lint = "${pkgs.statix}/bin/statix fix --ignore node_modules .";
        dead-code = "${pkgs.deadnix}/bin/deadnix --exclude ./node_modules -e .";
        format = "${pkgs.alejandra}/bin/alejandra --exclude ./node_modules .";
      };
      node = {
        lint = "${pkgs.nodejs}/bin/npm run fix:lint";
        format = "${pkgs.nodejs}/bin/npm run fix:format";
      };
    };
  };
in
  pkgs.mkShell {
    FORCE_COLOR = 1;
    buildInputs = [
      cli
      pkgs.git
      pkgs.niv
      pkgs.nodejs
      pkgs.pre-commit
      (
        pkgs.rust-bin.stable.latest.default.override {
          extensions = ["rust-std"];
          targets = ["wasm32-unknown-unknown"];
        }
      )
    ];
  }
