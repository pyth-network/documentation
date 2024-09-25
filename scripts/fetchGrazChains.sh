#!/bin/bash
MAX_RETRIES=5
command_exists() {
    command -v "$1" >/dev/null 2>&1
}
if ! command_exists graz; then
    echo "graz is not installed."
    if command_exists npm; then
        npm install -g graz
    else
        echo "Error: npm is not installed. Please install npm and try again."
        exit 1
    fi
fi

fetch_graz_chains() {
    local retry_count=0

    while [ $retry_count -lt $MAX_RETRIES ]; do
        echo "Attempt $((retry_count + 1)) to fetch cosmos chains..."

        if graz generate -g -b; then
            echo "Successfully fetched cosmos chains!"
            return 0
        else
            retry_count=$((retry_count + 1))
            if [ $retry_count -lt $MAX_RETRIES ]; then
                echo "Fetch failed. Retrying in 5 seconds..."
                sleep 5
            else
                echo "Max retries reached. Unable to fetch cosmos chains."
            fi
        fi
    done

    return 1
}

if fetch_graz_chains; then
    echo "Cosmos chains have been successfully fetched and stored in $OUTPUT_DIR"
else
    echo "Failed to fetch cosmos chains after $MAX_RETRIES attempts."
    exit 1
fi
