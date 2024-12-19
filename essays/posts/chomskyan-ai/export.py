import re
import shutil
import os

def copy_figures(index_file, figure_dir, export_dir):
    """
    Extracts figure filenames from a qmd file and copies them to an export directory.

    Args:
        index_file (str): Path to the index.qmd file.
        figure_dir (str): Path to the directory containing the figures.
        export_dir (str): Path to the directory where figures should be copied.
    """

    try:
        with open(index_file, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File '{index_file}' not found.")
        return

    # Regex to find filenames within (figure/...) pattern
    pattern = r'\(figure/([^)]+)\)'
    matches = re.findall(pattern, content)

    # Create export directory if it doesn't exist
    os.makedirs(export_dir, exist_ok=True)

    for filename in matches:
        source_path = os.path.join(figure_dir, filename)
        destination_path = os.path.join(export_dir, filename)

        try:
            shutil.copy2(source_path, destination_path)
            print(f"Copied '{source_path}' to '{destination_path}'")
        except FileNotFoundError:
            print(f"Error copying '{source_path}': File not found.")
        except Exception as e:
            print(f"Error copying '{source_path}': {e}")

    print("Done.")

# Example usage:
index_file = 'index.qmd'
figure_dir = 'figure'
export_dir = 'figure_export'
copy_figures(index_file, figure_dir, export_dir)
