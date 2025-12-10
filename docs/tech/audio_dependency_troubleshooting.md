# Audio dependency troubleshooting

Use these quick checks when Windows developers hit missing-package errors while setting up audio tooling for experiments or future features.

## `pyaudioop` is not a published package
`audioop` ships with Python's standard library and does not need to be installed from PyPI. The similarly named `pyaudioop` package does not exist, so `pip install pyaudioop` will always fail.

**Fix:** Import the standard module directly and remove the bad dependency from any notes or requirements.

```python
import audioop  # built-in; no pip install required
```

## Capturing microphone input on Windows
If you need microphone access for demos or prototyping, install a supported library instead:

1. Use the prebuilt wheels for [PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) on Windows:
   ```powershell
   python -m pip install --upgrade pip
   python -m pip install pipwin
   python -m pipwin install pyaudio
   ```
2. Verify the module loads and audioop interop works:
   ```powershell
   python - <<'PY'
   import pyaudio
   import audioop

   pa = pyaudio.PyAudio()
   print(f"PyAudio devices: {pa.get_device_count()}")
   print(f"audioop available: {audioop.__name__}")
   PY
   ```

If PyAudio is overkill and you only need file-based processing, use pure-Python options like [`pydub`](https://github.com/jiaaro/pydub) or [`soundfile`](https://pysoundfile.readthedocs.io/) instead of hunting for `pyaudioop`.
