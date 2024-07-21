import os
from concurrent.futures import ThreadPoolExecutor, as_completed
from flask import Flask, jsonify, request
from dotenv import load_dotenv
import google.generativeai as genai
import time
import requests
import socket
import random

app = Flask(__name__)
load_dotenv()
genai.configure(api_key=os.environ.get('API_KEY'))
model = genai.GenerativeModel('gemini-1.5-flash')

def generate_long_text(prompt):
    start_time = time.time()
    try:
        response = model.generate_content(prompt)
        return response.text if response else ''
    except Exception as e:
        print(f"Error generating content for prompt '{prompt}': {e}")
        return ''

def process_prompts(explanation_prompts, code_example_prompts):
    explanations = []
    code_examples = []

    with ThreadPoolExecutor() as executor:
        explanation_futures = [executor.submit(generate_long_text, prompt) for prompt in explanation_prompts]
        code_example_futures = [executor.submit(generate_long_text, prompt) for prompt in code_example_prompts]

        for future in as_completed(explanation_futures):
            try:
                result = future.result()
                if result:
                    explanations.append(result)
            except Exception as e:
                print(f"Error processing explanation future: {e}")

        for future in as_completed(code_example_futures):
            try:
                result = future.result()
                if result:
                    code_examples.append(result)
            except Exception as e:
                print(f"Error processing code example future: {e}")

    explanations_flat = list(set(explanations))
    code_examples_flat = list(set(code_examples))

    explanations_flat = list(dict.fromkeys(explanations_flat))
    code_examples_flat = list(dict.fromkeys(code_examples_flat))

    processed_explanations = []
    for explanation in explanations_flat:
        if explanation:
            sentences = explanation.split('. ')
            sentences = [sentence.capitalize() for sentence in sentences if sentence]
            processed_explanation = '. '.join(sentences)
            processed_explanations.append(processed_explanation)

    processed_code_examples = []
    for example in code_examples_flat:
        if example:
            formatted_example = example.replace('; ', '\n').replace('    ', '\n    ')
            processed_code_examples.append(formatted_example)

    formatted_explanations = "<br><br>".join(processed_explanations)
    formatted_code_examples = "\n\n".join(processed_code_examples)

    return formatted_explanations, formatted_code_examples

# Python Part
@app.route('/python-info')
def python_info():
    explanation_prompts = [
        "Provide a brief description of the Python programming language.",
        "Describe the key features of Python programming language."
    ]

    code_example_prompts = [
        "Provide a simple code example to demonstrate Python syntax.",
        "Give an example of how to define a function in Python."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(explanation_prompts, code_example_prompts)

    data = {
        "title": "Python Programming Language",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples,
        "sub_links": [
            {"title": "Installation", "url": "/python-info/install"},
            {"title": "Language Reference", "url": "/python-info/reference"},
            {"title": "Standard Library", "url": "/python-info/library"},
            {"title": "Module Installation", "url": "/python-info/modules"},
            {"title": "Distribution", "url": "/python-info/distribution"}
        ]
    }

    return jsonify(data)

@app.route('/python-info/install')
def python_install_info():
    install_explanation_prompts = [
        "Explain the steps to install Python on Windows.",
        "Describe the process of installing Python on macOS.",
        "How can you install Python on Linux?"
    ]

    install_code_example_prompts = [
        "Provide the command to check the Python version after installation.",
        "Give an example of a script to verify Python installation."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(install_explanation_prompts, install_code_example_prompts)

    data = {
        "title": "Python Installation",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)

@app.route('/python-info/reference')
def python_language_reference_info():
    reference_explanation_prompts = [
        "Provide an overview of Python's syntax.",
        "Describe the basic data types in Python.",
        "Explain control flow statements in Python (if, for, while)."
    ]

    reference_code_example_prompts = [
        "Give an example of variable declaration in Python.",
        "Provide an example of an if statement in Python.",
        "Show how to create a list and iterate over it in Python."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(reference_explanation_prompts, reference_code_example_prompts)

    data = {
        "title": "Python Language Reference",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)

@app.route('/python-info/library')
def python_standard_library_info():
    standard_library_explanation_prompts = [
        "Provide an overview of Python's standard library.",
        "Describe the key modules in Python's standard library."
    ]

    standard_library_code_example_prompts = [
        "Give an example of using the 'os' module.",
        "Provide a code snippet using the 'datetime' module."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(standard_library_explanation_prompts, standard_library_code_example_prompts)

    data = {
        "title": "Python Standard Library",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)

@app.route('/python-info/modules')
def python_module_installation_info():
    module_installation_explanation_prompts = [
        "Describe the steps to install a Python module.",
        "Explain the use of the 'pip' command for installing modules."
    ]

    module_installation_code_example_prompts = [
        "Provide an example of installing a module using pip.",
        "Give a code example showing how to import and use an installed module."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(module_installation_explanation_prompts, module_installation_code_example_prompts)

    data = {
        "title": "Python Module Installation",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)

@app.route('/python-info/distribution')
def python_module_distribution_info():
    module_distribution_explanation_prompts = [
        "Explain how to package Python code for distribution.",
        "Describe the steps to publish a package to PyPI.",
        "What tools can be used to manage Python package distribution?"
    ]

    module_distribution_code_example_prompts = [
        "Provide an example of a setup.py file for a Python package.",
        "Give a code snippet showing how to use 'twine' to upload a package to PyPI."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(module_distribution_explanation_prompts, module_distribution_code_example_prompts)

    data = {
        "title": "Python Module Distribution",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)

# Angular Part
@app.route('/angular-info')
def angular_info():
    explanation_prompts = [
        "Provide a brief description of the Angular framework.",
        "Describe the key features of the Angular framework."
    ]

    code_example_prompts = [
        "Provide a simple code example to demonstrate Angular syntax.",
        "Give an example of how to define a component in Angular."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(explanation_prompts, code_example_prompts)

    data = {
        "title": "Angular Framework",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)


# C Part
@app.route('/c-info')
def c_info():
    explanation_prompts = [
        "Provide a brief description of the C programming language.",
        "Describe the key features of the C programming language."
    ]

    code_example_prompts = [
        "Provide a simple code example to demonstrate C syntax.",
        "Give an example of how to define a function in C."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(explanation_prompts, code_example_prompts)

    data = {
        "title": "C Programming Language",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)

# .NET Part
@app.route('/dotnet-info')
def dotnet_info():
    explanation_prompts = [
        "Provide a brief description of the .NET framework.",
        "Describe the key features of the .NET framework."
    ]

    code_example_prompts = [
        "Provide a simple code example to demonstrate .NET syntax.",
        "Give an example of how to define a class in .NET."
    ]

    formatted_explanations, formatted_code_examples = process_prompts(explanation_prompts, code_example_prompts)

    data = {
        "title": ".NET Framework",
        "description": formatted_explanations,
        "code_examples": formatted_code_examples
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
