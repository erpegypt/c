from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in hagar/__init__.py
from hagar import __version__ as version

setup(
	name="hagar",
	version=version,
	description="use to test",
	author="test",
	author_email="hagermossad80@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
